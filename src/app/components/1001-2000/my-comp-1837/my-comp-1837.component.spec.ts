import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1837Component } from './my-comp-1837.component';

describe('MyComp1837Component', () => {
  let component: MyComp1837Component;
  let fixture: ComponentFixture<MyComp1837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
