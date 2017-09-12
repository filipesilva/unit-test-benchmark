import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5728Component } from './my-comp-5728.component';

describe('MyComp5728Component', () => {
  let component: MyComp5728Component;
  let fixture: ComponentFixture<MyComp5728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
