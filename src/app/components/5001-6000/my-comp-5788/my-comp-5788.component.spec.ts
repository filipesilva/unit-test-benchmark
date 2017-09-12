import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5788Component } from './my-comp-5788.component';

describe('MyComp5788Component', () => {
  let component: MyComp5788Component;
  let fixture: ComponentFixture<MyComp5788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
