import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2189Component } from './my-comp-2189.component';

describe('MyComp2189Component', () => {
  let component: MyComp2189Component;
  let fixture: ComponentFixture<MyComp2189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
