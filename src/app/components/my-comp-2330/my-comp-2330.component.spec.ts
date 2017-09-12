import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2330Component } from './my-comp-2330.component';

describe('MyComp2330Component', () => {
  let component: MyComp2330Component;
  let fixture: ComponentFixture<MyComp2330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
