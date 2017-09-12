import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp821Component } from './my-comp-821.component';

describe('MyComp821Component', () => {
  let component: MyComp821Component;
  let fixture: ComponentFixture<MyComp821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
