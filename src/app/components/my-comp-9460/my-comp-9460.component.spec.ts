import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9460Component } from './my-comp-9460.component';

describe('MyComp9460Component', () => {
  let component: MyComp9460Component;
  let fixture: ComponentFixture<MyComp9460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
