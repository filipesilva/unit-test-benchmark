import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5798Component } from './my-comp-5798.component';

describe('MyComp5798Component', () => {
  let component: MyComp5798Component;
  let fixture: ComponentFixture<MyComp5798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
