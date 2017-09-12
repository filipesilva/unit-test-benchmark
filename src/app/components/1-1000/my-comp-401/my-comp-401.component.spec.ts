import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp401Component } from './my-comp-401.component';

describe('MyComp401Component', () => {
  let component: MyComp401Component;
  let fixture: ComponentFixture<MyComp401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
