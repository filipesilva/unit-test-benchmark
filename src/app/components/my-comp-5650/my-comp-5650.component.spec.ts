import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5650Component } from './my-comp-5650.component';

describe('MyComp5650Component', () => {
  let component: MyComp5650Component;
  let fixture: ComponentFixture<MyComp5650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
