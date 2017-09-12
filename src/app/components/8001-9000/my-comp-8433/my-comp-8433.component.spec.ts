import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8433Component } from './my-comp-8433.component';

describe('MyComp8433Component', () => {
  let component: MyComp8433Component;
  let fixture: ComponentFixture<MyComp8433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
