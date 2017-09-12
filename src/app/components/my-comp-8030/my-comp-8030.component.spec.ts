import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8030Component } from './my-comp-8030.component';

describe('MyComp8030Component', () => {
  let component: MyComp8030Component;
  let fixture: ComponentFixture<MyComp8030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
