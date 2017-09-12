import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5155Component } from './my-comp-5155.component';

describe('MyComp5155Component', () => {
  let component: MyComp5155Component;
  let fixture: ComponentFixture<MyComp5155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
