import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5578Component } from './my-comp-5578.component';

describe('MyComp5578Component', () => {
  let component: MyComp5578Component;
  let fixture: ComponentFixture<MyComp5578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
