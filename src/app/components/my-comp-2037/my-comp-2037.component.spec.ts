import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2037Component } from './my-comp-2037.component';

describe('MyComp2037Component', () => {
  let component: MyComp2037Component;
  let fixture: ComponentFixture<MyComp2037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
