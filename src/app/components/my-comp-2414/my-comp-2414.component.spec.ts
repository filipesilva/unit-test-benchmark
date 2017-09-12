import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2414Component } from './my-comp-2414.component';

describe('MyComp2414Component', () => {
  let component: MyComp2414Component;
  let fixture: ComponentFixture<MyComp2414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
