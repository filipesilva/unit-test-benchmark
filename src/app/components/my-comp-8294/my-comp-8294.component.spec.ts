import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8294Component } from './my-comp-8294.component';

describe('MyComp8294Component', () => {
  let component: MyComp8294Component;
  let fixture: ComponentFixture<MyComp8294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
