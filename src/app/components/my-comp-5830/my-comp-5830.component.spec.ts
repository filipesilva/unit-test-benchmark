import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5830Component } from './my-comp-5830.component';

describe('MyComp5830Component', () => {
  let component: MyComp5830Component;
  let fixture: ComponentFixture<MyComp5830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
