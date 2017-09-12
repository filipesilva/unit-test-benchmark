import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1735Component } from './my-comp-1735.component';

describe('MyComp1735Component', () => {
  let component: MyComp1735Component;
  let fixture: ComponentFixture<MyComp1735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
