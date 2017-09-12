import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5317Component } from './my-comp-5317.component';

describe('MyComp5317Component', () => {
  let component: MyComp5317Component;
  let fixture: ComponentFixture<MyComp5317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
