import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3260Component } from './my-comp-3260.component';

describe('MyComp3260Component', () => {
  let component: MyComp3260Component;
  let fixture: ComponentFixture<MyComp3260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
