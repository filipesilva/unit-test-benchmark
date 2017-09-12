import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp404Component } from './my-comp-404.component';

describe('MyComp404Component', () => {
  let component: MyComp404Component;
  let fixture: ComponentFixture<MyComp404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
