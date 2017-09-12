import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8680Component } from './my-comp-8680.component';

describe('MyComp8680Component', () => {
  let component: MyComp8680Component;
  let fixture: ComponentFixture<MyComp8680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
