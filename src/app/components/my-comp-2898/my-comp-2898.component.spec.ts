import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2898Component } from './my-comp-2898.component';

describe('MyComp2898Component', () => {
  let component: MyComp2898Component;
  let fixture: ComponentFixture<MyComp2898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
