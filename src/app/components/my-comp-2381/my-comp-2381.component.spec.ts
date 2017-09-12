import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2381Component } from './my-comp-2381.component';

describe('MyComp2381Component', () => {
  let component: MyComp2381Component;
  let fixture: ComponentFixture<MyComp2381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
