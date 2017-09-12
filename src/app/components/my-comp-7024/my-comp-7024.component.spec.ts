import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7024Component } from './my-comp-7024.component';

describe('MyComp7024Component', () => {
  let component: MyComp7024Component;
  let fixture: ComponentFixture<MyComp7024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
