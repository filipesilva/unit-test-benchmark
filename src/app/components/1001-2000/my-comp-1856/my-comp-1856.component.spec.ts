import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1856Component } from './my-comp-1856.component';

describe('MyComp1856Component', () => {
  let component: MyComp1856Component;
  let fixture: ComponentFixture<MyComp1856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
