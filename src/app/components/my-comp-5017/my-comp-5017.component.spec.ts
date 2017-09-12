import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5017Component } from './my-comp-5017.component';

describe('MyComp5017Component', () => {
  let component: MyComp5017Component;
  let fixture: ComponentFixture<MyComp5017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
