import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2257Component } from './my-comp-2257.component';

describe('MyComp2257Component', () => {
  let component: MyComp2257Component;
  let fixture: ComponentFixture<MyComp2257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
