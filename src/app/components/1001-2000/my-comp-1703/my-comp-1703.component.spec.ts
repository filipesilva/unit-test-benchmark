import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1703Component } from './my-comp-1703.component';

describe('MyComp1703Component', () => {
  let component: MyComp1703Component;
  let fixture: ComponentFixture<MyComp1703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
