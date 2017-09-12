import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5689Component } from './my-comp-5689.component';

describe('MyComp5689Component', () => {
  let component: MyComp5689Component;
  let fixture: ComponentFixture<MyComp5689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
