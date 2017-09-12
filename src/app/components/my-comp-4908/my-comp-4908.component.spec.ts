import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4908Component } from './my-comp-4908.component';

describe('MyComp4908Component', () => {
  let component: MyComp4908Component;
  let fixture: ComponentFixture<MyComp4908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
