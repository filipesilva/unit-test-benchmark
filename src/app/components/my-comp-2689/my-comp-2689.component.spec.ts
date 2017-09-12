import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2689Component } from './my-comp-2689.component';

describe('MyComp2689Component', () => {
  let component: MyComp2689Component;
  let fixture: ComponentFixture<MyComp2689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
