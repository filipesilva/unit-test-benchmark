import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1872Component } from './my-comp-1872.component';

describe('MyComp1872Component', () => {
  let component: MyComp1872Component;
  let fixture: ComponentFixture<MyComp1872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
