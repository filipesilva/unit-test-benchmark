import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5673Component } from './my-comp-5673.component';

describe('MyComp5673Component', () => {
  let component: MyComp5673Component;
  let fixture: ComponentFixture<MyComp5673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
