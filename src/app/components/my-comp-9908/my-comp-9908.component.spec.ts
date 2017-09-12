import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9908Component } from './my-comp-9908.component';

describe('MyComp9908Component', () => {
  let component: MyComp9908Component;
  let fixture: ComponentFixture<MyComp9908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
