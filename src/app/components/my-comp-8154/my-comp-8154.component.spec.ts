import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8154Component } from './my-comp-8154.component';

describe('MyComp8154Component', () => {
  let component: MyComp8154Component;
  let fixture: ComponentFixture<MyComp8154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
