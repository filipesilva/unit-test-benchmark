import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7892Component } from './my-comp-7892.component';

describe('MyComp7892Component', () => {
  let component: MyComp7892Component;
  let fixture: ComponentFixture<MyComp7892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
