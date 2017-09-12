import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1363Component } from './my-comp-1363.component';

describe('MyComp1363Component', () => {
  let component: MyComp1363Component;
  let fixture: ComponentFixture<MyComp1363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
