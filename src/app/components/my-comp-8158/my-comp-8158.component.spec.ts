import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8158Component } from './my-comp-8158.component';

describe('MyComp8158Component', () => {
  let component: MyComp8158Component;
  let fixture: ComponentFixture<MyComp8158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
