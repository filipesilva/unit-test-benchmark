import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2952Component } from './my-comp-2952.component';

describe('MyComp2952Component', () => {
  let component: MyComp2952Component;
  let fixture: ComponentFixture<MyComp2952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
