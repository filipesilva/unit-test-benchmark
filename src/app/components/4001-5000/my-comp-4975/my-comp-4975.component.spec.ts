import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4975Component } from './my-comp-4975.component';

describe('MyComp4975Component', () => {
  let component: MyComp4975Component;
  let fixture: ComponentFixture<MyComp4975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
