import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5200Component } from './my-comp-5200.component';

describe('MyComp5200Component', () => {
  let component: MyComp5200Component;
  let fixture: ComponentFixture<MyComp5200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
