import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5551Component } from './my-comp-5551.component';

describe('MyComp5551Component', () => {
  let component: MyComp5551Component;
  let fixture: ComponentFixture<MyComp5551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
