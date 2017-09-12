import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7275Component } from './my-comp-7275.component';

describe('MyComp7275Component', () => {
  let component: MyComp7275Component;
  let fixture: ComponentFixture<MyComp7275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
