import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1329Component } from './my-comp-1329.component';

describe('MyComp1329Component', () => {
  let component: MyComp1329Component;
  let fixture: ComponentFixture<MyComp1329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
