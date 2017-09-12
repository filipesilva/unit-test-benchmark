import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4679Component } from './my-comp-4679.component';

describe('MyComp4679Component', () => {
  let component: MyComp4679Component;
  let fixture: ComponentFixture<MyComp4679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
