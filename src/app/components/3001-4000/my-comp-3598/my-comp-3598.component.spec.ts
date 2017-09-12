import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3598Component } from './my-comp-3598.component';

describe('MyComp3598Component', () => {
  let component: MyComp3598Component;
  let fixture: ComponentFixture<MyComp3598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
