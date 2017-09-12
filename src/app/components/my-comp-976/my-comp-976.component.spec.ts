import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp976Component } from './my-comp-976.component';

describe('MyComp976Component', () => {
  let component: MyComp976Component;
  let fixture: ComponentFixture<MyComp976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
