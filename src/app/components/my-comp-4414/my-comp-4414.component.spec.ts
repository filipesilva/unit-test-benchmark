import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4414Component } from './my-comp-4414.component';

describe('MyComp4414Component', () => {
  let component: MyComp4414Component;
  let fixture: ComponentFixture<MyComp4414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
