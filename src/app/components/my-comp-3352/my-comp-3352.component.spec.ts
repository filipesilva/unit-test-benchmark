import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3352Component } from './my-comp-3352.component';

describe('MyComp3352Component', () => {
  let component: MyComp3352Component;
  let fixture: ComponentFixture<MyComp3352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
