import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5576Component } from './my-comp-5576.component';

describe('MyComp5576Component', () => {
  let component: MyComp5576Component;
  let fixture: ComponentFixture<MyComp5576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
