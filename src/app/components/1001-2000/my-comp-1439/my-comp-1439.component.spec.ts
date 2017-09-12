import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1439Component } from './my-comp-1439.component';

describe('MyComp1439Component', () => {
  let component: MyComp1439Component;
  let fixture: ComponentFixture<MyComp1439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
