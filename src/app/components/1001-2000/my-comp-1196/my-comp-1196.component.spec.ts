import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1196Component } from './my-comp-1196.component';

describe('MyComp1196Component', () => {
  let component: MyComp1196Component;
  let fixture: ComponentFixture<MyComp1196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
